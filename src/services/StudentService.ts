import { Students } from "../models/Students";

export class StudentService {
    static processStudentGrades(students: Students) {
        if (!students.id || !students.name || !Array.isArray(students.grades)) {
            throw new Error(`Aluno inválido: ${JSON.stringify(students)}`);
        }

        if (students.grades.some((grades) => grades < 0 || grades > 10)) {
            throw new Error(`Notas inválidas para o aluno ${students.name}. As notas devem estar entre 0 e 10.`);
        }

        const finalGrade = students.grades.reduce((acc, current) => acc + current, 0) / students.grades.length;
        const approved = finalGrade >= 7 ? 'APROVADO' : 'REPROVADO';

        return { ...students, finalGrade, approved };
    }
}
