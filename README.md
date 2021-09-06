# Trial work: Attribute Stars


## Task description

Build a new Vue-Component 'AttributeBadge.vue'.

Look at layout-blue.png, layout-red.png, layout-number.png
how the component should look like or look here to see the component in action:

https://widget.vergleich.org/comparison/?comparisonId=26


The Attribute Badge component should get three values as Vue-Properties.

- type (type of rating in the badge, text or number)
- rating (rating between 1 (bad) and 100 (very good))
- color (the color of the badge, see layouts)

the rating value should converted in the new component to german school grades!

rating       school grades
100 - 90     1 = sehr gut
 89 - 70     2 = gut
 69 - 50     3 = befriedigend
 49 - 30     4 = ausreichend
 29 - 20     5 = mangelhaft
  1 - 19     6 = ungenügend

translations: 
1 = very good, 2 = good, 3 = satisfactory, 4 = sufficient, 5 = poor, 6 = deficient


## Testing

The finish component and its methods should be tested with jest.

Build unit-test and test-snapshot.


## Technology

Use minimum following technologies to build the component and the component-test:

VUE, HTML5, SCSS, TYPESCRIPT, JEST

## Result

implemented the attribute stars component and made to be able to import the component on everywhere

implemented the unit test for this component

1. import the component

2. put the tag in the template tag of the parents components what you want

3. set props data on the tag (type, rating, color)

### To test this component
   npm run serve

### To run unit test
   npm run test:unit
  

