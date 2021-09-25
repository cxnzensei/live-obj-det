export const drawRect = (detections, ctx) => {
    detections.forEach(detection => {
        const [x, y, width, height] = detection['bbox'];
        const text = detection['class'];

        const color = '#' + Math.floor(Math.random()*16777215).toString(16);
        ctx.strokeStyle = color;
        ctx.font = '20px Arial';
        ctx.fillStyle = color;

        ctx.beginPath();
        ctx.fillText(text, x, y);
        ctx.rect(x, y, width, height)
        ctx.stroke();
    });
}