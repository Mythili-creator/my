package com.data.controller;

import java.awt.MenuItem;
import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.data.service.AppUserDetailsService;

@RestController
@RequestMapping("/display")
public class Display {
	private static final Logger LOGGER = LoggerFactory.getLogger(Display.class);

	@Autowired
	AppUserDetailsService appUserDetailsService;


	@GetMapping()
	public ArrayList<MenuItem> getAllMenuItems() {
		
				return null;
		}

	}


