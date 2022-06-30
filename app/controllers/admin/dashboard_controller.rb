class Admin::DashboardController < ApplicationController
  def show
    @product_count = Product.count
    @category_count = Product.group(:category_id).count
  end
end
