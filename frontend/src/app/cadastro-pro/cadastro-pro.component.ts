import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Projeto } from '../models/projeto';
import { ProjetoService } from '../services/projeto.service';

import { FuncionarioService } from "../services/funcionario.service";

@Component({
  selector: 'app-cadastro-pro',
  templateUrl: './cadastro-pro.component.html',
  styleUrls: ['./cadastro-pro.component.css']
})
export class CadastroProComponent implements OnInit {
  projeto = {} as Projeto;
  projetos: Projeto[];

  constructor(private projetoService: ProjetoService, private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {  }

  saveProjeto(form: NgForm) {
    this.projetoService.saveProjeto(this.projeto).subscribe(() => {
      this.cleanForm(form);
      window.alert('Cadastro Realizado')
    });
    this.funcionarioService.updateResponsavelProjeto(this.projeto).subscribe(() => {})
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    form.resetForm();
    this.projeto = {} as Projeto;
  }
}
