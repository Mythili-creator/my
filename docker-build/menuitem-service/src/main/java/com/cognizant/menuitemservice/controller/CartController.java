package com.cognizant.menuitemservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.menuitemservice.model.Cart;
import com.cognizant.menuitemservice.service.CartService;

@RestController
@RequestMapping("/carts")
public class CartController {

	@Autowired
	public CartService cartService;

	@PostMapping("/{userId}/{menuItemId}")
	public void addCartItem(@PathVariable String userId, @PathVariable long menuItemId) {
		cartService.addCartItem(userId, menuItemId);
	}

	@GetMapping("/{userId}")
	public Cart getAllCartItems(@PathVariable String userId) {
		return cartService.getAllCartItems(userId);
	}

	@DeleteMapping("/{userId}/{menuItemId}")
	public void deleteCartItems(@PathVariable String userId, @PathVariable long menuItemId) {
		cartService.deleteCartItems(userId, menuItemId);
	}

}
