import { Injectable } from '@angular/core';
import { ApiResponse } from '../modelos/nodes';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class NodeService {
//declaraciones de varibles
  nodeId!: string;
  ticket: string | null = localStorage.getItem("token");
  

// uso de librerias en el contructor
  constructor(private http:HttpClient) { }

//obtener los nodos de root en alfresco
  async getNode(nodeId?: string): Promise<ApiResponse> {
    this.nodeId = nodeId || '-root-';
    const apiUrl = `http://34.28.152.207/alfresco/api/-default-/public/alfresco/versions/1/nodes/${this.nodeId}/children?alf_ticket=${this.ticket}`;

    try {
      const data = await this.http.get<ApiResponse>(apiUrl).toPromise();
      if (!data) {
        throw new Error('No hay datos');
      }
      return data;
    } catch (error) {
      console.error('Error al obtener los nodos', error);
      console.log(this.ticket+"vacio tiket")
      throw error;
    }
  }

  //Eliminar Un archivo o carpeta

  async deletedNode(nodeId: string) {
    try {
      return await this.nodesApi.deleteNode(nodeId, {});
    } catch (error) {
      console.log('Error al borrar el nodo', error);
    }
  }


}
