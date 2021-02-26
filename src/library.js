function bootstrap() {
    var container = document.getElementById('container');
    var content = '<div style=\'backgroud-color:#000\'>some helpful text here</div>';
    container.innerHTML = content;

    miro.helpers.initScrollableContainerWithDraggableImage(container, {draggableIamgeSelector: '.image-item-box'});
}

miro.onReady(bootstrap);