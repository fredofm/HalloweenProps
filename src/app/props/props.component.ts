import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { Prop } from 'src/app/_models/prop';
import { PropService } from 'src/app/_services/prop/prop.service';

@Component({
  selector: 'app-props',
  templateUrl: './props.component.html',
  styleUrls: ['./props.component.css']
})
export class PropsComponent implements OnInit {
  props: Prop[] = [];
  interval: any;

  constructor(private propService: PropService) { }

  ngOnInit(): void {
    this.getData();
    this.interval = setInterval(() => {
      this.getData();
    }, 3000);
  }

  getData() {
    this.propService.getProps().subscribe((data: Prop[]) => {
      this.props = data;
    });
  }

  activateProp(id: number) {
    let prop = this.props.find(x => x.id === id);

    this.propService.activateProp(id).subscribe({
      complete: () => {
        if (prop) {
          prop.activatable = false;
        }
      }
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
