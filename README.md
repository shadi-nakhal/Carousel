# Carousel

## React app from scratch

### Install dependancies

`npm install`

### Start development server on port 3000

`npm start`

### Build a production bundle in "./dist"

`npm run build`

### Carousel componant

```javascript
<Carousel height="80vh" width="95vw" swipeOff items={items} />
```

##### swipeOff to disable swipes

##### items is an array, example :

```javascript
const items2 = [
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat,
  </p>,
  <img src="https://picsum.photos/200/300" alt="picture" />,
  <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>,
];
```
