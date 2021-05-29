package com.fullstack.week.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.week.domain.Categoria;
import com.fullstack.week.repository.CategoriaRepository;

@RestController
@RequestMapping("/categoria")
@CrossOrigin(origins="http://localhost:3000")
public class CategoriaResource {

	@Autowired
	private CategoriaRepository categoriaRepository;

	@GetMapping
	public List<Categoria> listar() {
		
		return categoriaRepository.findAll();
	}
	
	@GetMapping("/{categoriaId}")
	@ResponseStatus(HttpStatus.CREATED)
	public Categoria buscar(@PathVariable Long categoriaId) {
		
		return categoriaRepository.findById(categoriaId)
				.orElseThrow(null);				
	}
	
	@DeleteMapping
	public ResponseEntity<Void> remover(@PathVariable Long categoriaId) {
		
		if(!categoriaRepository.existsById(categoriaId)) {
			return ResponseEntity.notFound().build();
		}
		
		categoriaRepository.deleteById(categoriaId);
		return ResponseEntity.noContent().build();
	}
	
	@PostMapping
	public Categoria cadastrar(@RequestBody Categoria categoria) {
		
		return categoriaRepository.save(categoria);
	}
	
}
