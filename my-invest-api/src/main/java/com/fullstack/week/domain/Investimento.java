package com.fullstack.week.domain;

import java.time.OffsetDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Investimento {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String codigoAtivo;
	private Double valorCota;
	private Integer qtdCotas;
	private OffsetDateTime dataCompra;
	
	@ManyToOne
	private Categoria categoria;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCodigoAtivo() {
		return codigoAtivo;
	}
	public void setCodigoAtivo(String codigoAtivo) {
		this.codigoAtivo = codigoAtivo;
	}
	public Double getValorCota() {
		return valorCota;
	}
	public void setValorCota(Double valorCota) {
		this.valorCota = valorCota;
	}
	public Integer getQtdCotas() {
		return qtdCotas;
	}
	public void setQtdCotas(Integer qtdCotas) {
		this.qtdCotas = qtdCotas;
	}
	public OffsetDateTime getDataCompra() {
		return dataCompra;
	}
	public void setDataCompra(OffsetDateTime dataCompra) {
		this.dataCompra = dataCompra;
	}
	public Categoria getCategoria() {
		return categoria;
	}
	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
}
