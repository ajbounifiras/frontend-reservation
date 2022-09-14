import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/classes/categorie';
import { Produit } from 'src/app/classes/produit';
import { CategorieService } from 'src/app/serveses/categorie.service';
import { ProduitService } from 'src/app/serveses/produit.service';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
const URL = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-produit1',
  templateUrl: './produit1.component.html',
  styleUrls: ['./produit1.component.css']
})
export class Produit1Component implements OnInit {
 listpro:Produit[]=[];
 pro=new Produit;
 listcat:Categorie[]=[];
 public uploader: FileUploader = new FileUploader({
  url: URL,
  itemAlias: 'image',
});
  constructor(private pr:ProduitService,private cs:CategorieService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAll();
   this.getAllCategorie();
   this.uploader.onAfterAddingFile = (file) => {
    file.withCredentials = false;
  };
  this.uploader.onCompleteItem =async (item: any, status: any) => {
    console.log('Uploaded File Details:', item);
      console.log(status)
      let a=JSON.parse(status);
      this.pro.image=await a.file
      if(this.pro._id!=null){
    
        await this.pr.edit(this.pro).subscribe(data=>{
          this.getAll();
          
        });
        
      }else{
        console.log(this.pro)
        await this.pr.add(this.pro).subscribe(data=>{
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
    this.pro=new Produit;
  }
  getAll(){
    this.pr.getAll().subscribe(data=>{
      this.listpro=data;
      console.log(this.listpro);
    })
  }
  getById(_id:any){
    this.pr.getById(_id).subscribe(data=>{
      this.pro=data
    })
  }
  deleteById(_id:any){
    this.pr.delete(_id).subscribe(data=>{
      this.getAll();
      this.reset();
      
    })
  }
  filter(e:any){
    if(e.target.value===""){
      this.getAll()
    }else{
    console.log(e.target.value)
    this.listpro=this.listpro.filter(x=>x.name==e.target.value ||x.description==e.target.value)
    }
  }
  getAllCategorie(){
    this.cs.getAll().subscribe(data=>{
      this.listcat=data
    })
  }
  selectChange(e:any){
    this.pro.categorieId=e
  }

}
