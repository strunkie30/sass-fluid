# Fluid values for SASS

----

Create fluid values for SCSS, makes it easy to build responsive websites.

## Examples

```scss
/* 
    create a fluid font-size value between 30px and 90px 
    use the window size 640px -> 1500px horizontal.
    
    window.width <= 640px = font-size = 30px;
    window.width >= 1500px = font-size = 90px;
*/

.foo {
    @include fluid(
        font-size,
        30px,
        90px
    );
}

/* 
    create a fluid font-size value between 30px and 90px
    use the window size 800px -> 1000px horizontal.
    
    window.width <= 800px = font-size = 30px;
    window.width == 900px = font-size = 60px;
    window.width >= 1000px = font-size = 90px;
*/

.foo {
    @include fluid(
        font-size,
        30px,
        90px,
        horizontal,
        800px,
        1000px
    );
}

/* 
    create a fluid padding value between 20px 40px 20px 60px and 40px 60px 40px 80px
    use the window size 400px -> 800px vertical.
    
    window.height <= 400px = paddding = 20px 40px 20px 60px;
    window.height >= 800px = paddding = 40px 60px 40px 80px;
*/

.foo {
    @include fluid(
        padding,
        20px 40px 20px 60px,
        40px 60px 40px 80px,
        vertical,
        400px, 800px
    );
}
```



### Configuration
```scss
@include fluid(
    $cssProperty,
    $minValues,
    $maxValues,
    $direction: horizontal,
    $breakpointMin: 640px,
    $breakpointMax: 1500px
);
```

```$cssProperty``` width | height | padding | margin | font-size | **or an other value that supports pixel values**    
```$maxValues``` pixel values    
```$minValues``` pixel values    
```$direction``` horizontal or vertical    
```$breakpointMin``` pixel value    
```$breakpointMax``` pixel value    