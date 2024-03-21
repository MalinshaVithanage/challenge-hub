import { Component } from '@angular/core';
import { PostCardComponent } from "../../layouts/post-card/post-card.component";

@Component({
    selector: 'app-single-post',
    standalone: true,
    templateUrl: './single-post.component.html',
    styleUrl: './single-post.component.css',
    imports: [PostCardComponent]
})
export class SinglePostComponent {

}
