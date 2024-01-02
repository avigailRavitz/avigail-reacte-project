import { observable, makeObservable, action } from 'mobx';
import Store from './Store'
class AdminData {
   business = {
      id: "",
      name: "",
      address: "",
      phone: "",
      owner: "",
      logo: "",
      description: "",
   };
   services = [
      {
         id: "11",
         name: "פגישת ייעוץ פרונטלית",
         description: "פגישת ייעוץ פרטנית בקליניקה",
         price: 500,
         duration: 60,
      },
      {
         id: "12",
         name: "בלהבלהבלהבלה",
         description: "פגישת ייעוץ פרטנית בקליניקה",
         price: 200,
         duration: 5,
      }
   ]
   isLogin = false;//נכנס כמנהל
   sendToEdit = false;//אם לחץ על edit in admin details
   //  serviceList=[];//מערך של אוביקטים שרותים
   constructor() {
      makeObservable(this, {
         services: observable,//מערך השרותים
         business: observable,
         isLogin: observable,//בדיקה אם המשתמש הוא המנהל(משתנה)
         setIsLogin: action,//בדיקה אם המשתמש הוא המנהל(פונקציה)
         sendToEdit: observable,//(משתנה)אם לחץ על edit in admin details
         setsendToEdit: action,//אם לחץ על edit in admin details)פונקציה)
      })
   }
   setIsLogin = (val) => {
      this.isLogin = val;
   }
   setsendToEdit = (val) => {
      this.sendToEdit = val;
   }

   updateAdminData = (data) => {
      this.business = { ...this.business, ...data };
      this.business = data
   }
}
export default new AdminData;