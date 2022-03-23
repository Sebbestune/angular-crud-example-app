import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  students: Student[] = [];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public studentService: StudentService) {}

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.studentService.getAll().subscribe((data: Student[]) => {
      this.students = data;
      console.log(this.students);
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteStudent(id: number) {
    this.studentService.delete(id).subscribe((res) => {
      this.students = this.students.filter((item) => item.id !== id);
      console.log('Student deleted successfully!');
    });
  }
}
