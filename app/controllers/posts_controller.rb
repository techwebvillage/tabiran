class PostsController < ApplicationController
  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      if @post.draft?
        redirect_to confirm_posts_path,notice: '下書きとして保存されました。'
      else
        redirect_to post_path(@post.id)
      end
    else
      render :new, status: :unprocessable_entity
    end
  end

  def index
    @posts = Post.published.page(params[:page]).reverse_order
    @posts = @posts.where('location LIKE ?', "%#{params[:search]}%") if params[:search].present?
    @user = current_user
    @following_users = @user.following_user
    @follower_users = @user.follower_user
  end

  def show
    @post = Post.find(params[:id])
    @post = Post.find(params[:id])
    unless ViewCount.find_by(user_id: current_user.id, post_id: @post.id)
      current_user.view_counts.create(post_id: @post.id)
    end
    @comment = Comment.new
    @comments = @post.comments.page(params[:page]).per(7).reverse_order
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to post_path(@post.id)
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    redirect_to posts_path
  end

  def confirm
    @posts = current_user.posts.draft.page(params[:page]).reverse_order
  end

  private
  def post_params
    params.require(:post).permit(:user_id, :location, :text, :image, :status, :latitude, :longitude)
  end
end
