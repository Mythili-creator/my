package com.cognizant.truyum.dao;

import java.util.ArrayList;
import java.util.List;

import com.cognizant.truyum.bean.MenuItem;

public interface MenuItemDao {
	public List<MenuItem> getMenuItemListAdmin();

	public ArrayList<MenuItem> getMenuItemListCustomer();

	public void modifyMenuItem(MenuItem menuItem);

	public MenuItem getMenuItem(long menuItemId);

}