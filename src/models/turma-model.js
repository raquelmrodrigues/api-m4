let id = 0;
export class Turma{
    constructor(id_funcionario, id_aluno, mes_inicio, ano_inicio, vagas_alunos){
        this.id = id++;
        this.id_funcionario = id_funcionario;
        this.id_aluno = id_aluno;
        this.mes_inicio = mes_inicio;
        this.ano_inicio = ano_inicio;
        
    }
}
