enum GenderEnum {
    female = "female",
    male = "male",
    other = "other"
  }
  
export  interface IFormInput {
    firstName: String;
    lastName: String
    gender: GenderEnum;
    
  }