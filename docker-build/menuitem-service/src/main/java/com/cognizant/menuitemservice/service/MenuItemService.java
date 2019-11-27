package com.cognizant.menuitemservice.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.menuitemservice.controller.MenuItemController;
import com.cognizant.menuitemservice.model.MenuItem;
import com.cognizant.menuitemservice.repository.MenuItemRepository;

@Service
public class MenuItemService {
	private static final Logger LOGGER = LoggerFactory.getLogger(MenuItemController.class);
//	@Autowired
//	public MenuItemDaoCollectionImpl menuItemDao;

	@Autowired
	public MenuItemRepository menuItemRepository;

	public List<MenuItem> getMenuItemListCustomer() {
		LOGGER.info("SERVICE WORKS");
		LOGGER.info("data is" + menuItemRepository.getMenuItem());
		// return menuItemDao.getMenuItemListCustomer();
		return menuItemRepository.getMenuItem();
	}

	public List<MenuItem> getMenuItemListAdmin() {
//		System.out.println(menuItemRepository.findAll());
		LOGGER.info("data is" + menuItemRepository.findAll());
		return menuItemRepository.findAll();
	}

	public MenuItem getMenuItem(long menuItemId) {
		// return menuItemDao.getMenuItem(menuItemId);

		int menuI = (int) menuItemId;

		return menuItemRepository.findById(menuI).get();

	}

	public void modifyMenuItem(MenuItem menuItem) {
//		menuItemDao.modifyMenuItem(menuItem);
		menuItemRepository.save(menuItem);
	}

}
