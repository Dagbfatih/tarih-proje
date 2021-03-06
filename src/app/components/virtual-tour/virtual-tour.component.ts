import { environment } from 'src/environments/environment';
import { ArtifactService } from './../../services/artifact.service';
import { ArtifactDetailsDto } from './../../models/dtos/artifactDetailsDto';
import { allTranslates } from './../../services/translation.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-virtual-tour',
  templateUrl: './virtual-tour.component.html',
  styleUrls: ['./virtual-tour.component.css'],
})
export class VirtualTourComponent implements OnInit {
  baseUrl = environment.baseUrl;
  currentPhotoPath: string;
  artifactsDetails: ArtifactDetailsDto[] = [];

  constructor(
    private modalService: NgbModal,
    private artifactService: ArtifactService
  ) {}

  ngOnInit(): void {
    this.getAllArtifacts();
  }

  getAllArtifacts() {
    this.artifactService.getAllDetails().subscribe((response) => {
      this.artifactsDetails = response.data;
    });
  }

  open(path: string, content: any) {
    this.currentPhotoPath = path;
    this.modalService.open(content, { centered: true, size: 'xl' });
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
