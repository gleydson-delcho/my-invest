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

import com.fullstack.week.domain.Investimento;
import com.fullstack.week.repository.InvestimentoRepository;

@RestController
@RequestMapping("/investimentos")
@CrossOrigin(origins="http://localhost:3000")
public class InvestimentoResource {
	
	@Autowired
	private InvestimentoRepository investimentoRepository;

	@GetMapping
	public List<Investimento> listar() {
		
		return investimentoRepository.findAll();
	}
	
	@GetMapping("/{investimentoId}")
	@ResponseStatus(HttpStatus.CREATED)
	public Investimento buscar(@PathVariable Long investimentoId) {
		
		return investimentoRepository.findById(investimentoId)
				.orElseThrow(null);				
	}
	
	@DeleteMapping("/{investimentoId}")
	public ResponseEntity<Void> remover(@PathVariable Long investimentoId) {
		
		if(!investimentoRepository.existsById(investimentoId)) {
			return ResponseEntity.notFound().build();
		}
		
		investimentoRepository.deleteById(investimentoId);
		return ResponseEntity.noContent().build();
	}
	
	@PostMapping
	public Investimento cadastrar(@RequestBody Investimento investimento) {
		
		return investimentoRepository.save(investimento);
	}
}
