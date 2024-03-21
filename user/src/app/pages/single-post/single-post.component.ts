import { Component } from '@angular/core';
import { PostCardComponent } from "../../layouts/post-card/post-card.component";
import { CommentFormComponent } from "../../comments/comment-form/comment-form.component";

@Component({
    selector: 'app-single-post',
    standalone: true,
    templateUrl: './single-post.component.html',
    styleUrl: './single-post.component.css',
    imports: [PostCardComponent, CommentFormComponent]
})
export class SinglePostComponent {

}
