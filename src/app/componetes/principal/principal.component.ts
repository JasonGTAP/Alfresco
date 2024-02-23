import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EntryList } from 'src/app/modelos/nodes';
import {NodeService} from 'src/app/servicios/node.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{
  
  
  nodeId: string | null = null;
  files: EntryList[] = [];
  
  
  constructor(
  private route: ActivatedRoute,
  private nodeService: NodeService
  
 
) {}
  
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=> {
      this.nodeId = params.get('id') || '-root-';
      this.nodeService.getNode(this.nodeId).then((data: any) => {
        this.files = data.list.entries;
      });
    });


  }

}

