package com.fullstack.week.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstack.week.domain.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

}
