package com.fullstack.week.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstack.week.domain.Investimento;

public interface InvestimentoRepository extends JpaRepository <Investimento, Long> {

	
}
