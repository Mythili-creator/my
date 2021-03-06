package com.cognizant.stockservice.bean;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


/**
 * @author 805831
 *
 */
@Entity
@Table(name = "ipo_details")
public class IPODetails {
	@Column(name = "ipo_id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@NotNull
	@Column(name = "ipo_company_name")
	private String companyName;
	@NotNull
	@Column(name = "ipo_stock_exchange")
	@NotNull
	private String stockExchange;
	@Column(name="ipo_price_per_share")
	private long pricePerShare;
	@Column(name="ipo_total_no_of_share")
	private long totalNoOfShare;
	@Column(name="ipo_open_date")
	private Date openDate;
	@Column(name="ipo_remarks")
	private String remarks;
	@Column(name="ipo_active")
	private boolean active;


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}


	public long getPricePerShare() {
		return pricePerShare;
	}

	public void setPricePerShare(long pricePerShare) {
		this.pricePerShare = pricePerShare;
	}

	public long getTotalNoOfShare() {
		return totalNoOfShare;
	}

	public void setTotalNoOfShare(long totalNoOfShare) {
		this.totalNoOfShare = totalNoOfShare;
	}

	public Date getOpenDate() {
		return openDate;
	}

	public void setOpenDate(Date openDate) {
		this.openDate = openDate;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

}
