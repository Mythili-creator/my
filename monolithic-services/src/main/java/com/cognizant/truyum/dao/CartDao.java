package com.cognizant.truyum.dao;

import com.cognizant.truyum.model.Cart;

public interface CartDao {
	public void addCartItem(String userId, long menuItemId);

	public Cart getAllCartItems(String userId);

	public void deleteCartItems(String userId, long menuItemId);
}
