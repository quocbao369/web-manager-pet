export class Pets {
    constructor(
        public  id:number,
        public  name: string,
        public  type: string,//loại
        public  breed: string,//giống
        public  age: number,//tuổi
        public  gender: string,//giới tính
        public  color: string,//màu sắc
        public  size: string,//kích thước
        public  healthStatus: string,//tình trạng sức khỏe
        public  feedingHabits: string,//thói quen ăn uống
        public  exerciseHabits: string,//thói quen vận động
        public  description:string,//mô tả
        public  img:string,
    ){}
}
// export interface Pets {
//           id:number,
//           name: string,
//           type: string,//loại
//           breed: string,//giống
//           age: number,//tuổi
//           gender: string,//giới tính
//           color: string,//màu sắc
//           size: string,//kích thước
//           healthStatus: string,//tình trạng sức khỏe
//           feedingHabits: string,//thói quen ăn uống
//           exerciseHabits: string,//thói quen vận động
//           description:string,//mô tả
//           img:string,
// }