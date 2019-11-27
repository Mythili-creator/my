package com.cognizant.authentication.model;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "menu_item")
public class MenuItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "me_id")
	private Integer id;

	@Column(name = "me_name")
	private String name;

	@Column(name = "me_price")
	private BigDecimal price;

	@Column(name = "me_active")
	private boolean isAvailable;

	@Column(name = "me_date_of_launch")
	private Date dateOfLaunch;

	@Column(name = "me_category")
	private String category;

	@Column(name = "me_free_delivery")
	private boolean freeDelivery;

	@Column(name = "me_image")
	private String url;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public boolean isisAvailable() {
		return isAvailable;
	}

	public void setisAvailable(boolean isAvailable) {
		this.isAvailable = isAvailable;
	}

	public Date getDateOfLaunch() {
		return dateOfLaunch;
	}

	public void setDateOfLaunch(Date dateOfLaunch) {
		this.dateOfLaunch = dateOfLaunch;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public boolean isFreeDelivery() {
		return freeDelivery;
	}

	public void setFreeDelivery(boolean freeDelivery) {
		this.freeDelivery = freeDelivery;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public MenuItem(Integer id, String name, BigDecimal price, boolean isAvailable, Date dateOfLaunch, String category,
			boolean freeDelivery, String url) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.isAvailable = isAvailable;
		this.dateOfLaunch = dateOfLaunch;
		this.category = category;
		this.freeDelivery = freeDelivery;
		this.url = url;
	}

	public MenuItem() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "MenuItem [id=" + id + ", name=" + name + ", price=" + price + ", isAvailable=" + isAvailable
				+ ", dateOfLaunch=" + dateOfLaunch + ", category=" + category + ", freeDelivery=" + freeDelivery
				+ ", url=" + url + "]";
	}

}
