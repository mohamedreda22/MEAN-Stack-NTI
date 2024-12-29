import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'noSpace',
    standalone: false //`standalone` property to false to make the pipe available to the entire application.
})


export class NoSpacePipe implements PipeTransform {
    transform(value: string): any {
        return value.replaceAll(' ', '');
  }
}

// what we done here ?
// we created a new pipe called noSpace that removes all spaces from a string.
// we used the replaceAll() method to replace all spaces with an empty string.
// we used the transform() method to apply the transformation.
// we used the @Pipe() decorator to define the pipe.
// we set the name property to noSpace to define the pipe name.
// we set the standalone property to false to make the pipe available to the entire application.
// we imported the Pipe and PipeTransform classes from @angular/core.
// we created a class called NoSpacePipe that implements the PipeTransform interface.

