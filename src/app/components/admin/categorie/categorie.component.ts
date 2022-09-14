import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/classes/categorie';
import { CategorieService } from 'src/app/serveses/categorie.service';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
const URL = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image',
  });
  listeCat:Categorie[]=[];
  cat=new Categorie;
  constructor(private cs:CategorieService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAll();
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem =async (item: any, status: any) => {

      console.log('Uploaded File Details:', item);
      console.log(status)
      let a=JSON.parse(status);

     this.cat.image=await a.file
      if(this.cat._id!=null){
        await this.cs.edit(this.cat).subscribe(data=>{
          this.getAll();
        });
        
      }else{
        await this.cs.add(this.cat).subscribe(data=>{
          this.getAll();
        });
        
      }
     
      this.toastr.success('File successfully uploaded!');
    };
    
  }
  async add(){
    await this.uploader.uploadAll()
  
  }
  reset(){
    this.cat=new Categorie;
  }
  getAll(){
    this.cs.getAll().subscribe(data=>{
      this.listeCat=data;
      console.log(this.listeCat);
    })
  }
  getById(_id:any){
    this.cs.getById(_id).subscribe(data=>{
      this.cat=data
    })
  }
  deleteById(_id:any){
    this.cs.delete(_id).subscribe(data=>{
      this.getAll();
      this.reset();
    })
  }
  filter(e:any){
    if(e.target.value===""){
      this.getAll()
    }else{
    console.log(e.target.value)
    this.listeCat=this.listeCat.filter(x=>x.name==e.target.value ||x.description==e.target.value)
    }
  }

}
