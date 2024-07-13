var video = document.createElement("video");

var qrcode = window.qrcode;
var qrCanvasElement = document.getElementById("qr-canvas");
var qrCanvas = qrCanvasElement.getContext("2d");
var qrcode_input = document.getElementById("qrcode_input");
var scanning = false;

var photoCanvasElement = document.getElementById("photo-canvas");
var photoCanvas = photoCanvasElement.getContext("2d");
var photo = document.getElementById('photo');
  
var btnqr = document.getElementById("btnqr");
var btnodp = document.getElementById("btnodp");
var modal_scan = document.getElementById("modal_scan");

qrcode.callback = function (res) {
  if (res) {
    qrcode_input.value = res;
    scanning = false;
    video.srcObject.getTracks().forEach(function (track) {
      track.stop();
    });
    video.stop(); 
  }
};

function startscan(){
  qrcode_input.value = "";
  navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: "environment"
    }
  }).then(function (stream) {
    scanning = true;
    video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
    video.srcObject = stream;
    video.play();
    tick();
    scan();
  });
};

function tick() {
  qrCanvasElement.height = video.videoHeight;
  qrCanvasElement.width = video.videoWidth;
  canvas.drawImage(video, 0, 0, qrCanvasElement.width, qrCanvasElement.height);
  scanning && requestAnimationFrame(tick);
}

function takepicture() {
  if (width && height) {
    photoCanvasElement.height = video.videoHeight;
    photoCanvasElement.width = video.videoWidth;
    photoCanvas.drawImage(video, 0, 0, photoCanvasElement.width, photoCanvasElement.height);
    var data = photoCanvasElement.toDataURL('image/png');
    photo.setAttribute('src', data);
  } else {
    clearphoto();
  }
}

function clearphoto() {
  photoCanvas.fillStyle = "#AAA";
  photoCanvas.fillRect(0, 0, photoCanvasElement.width, photoCanvasElement.height);
  var data = photoCanvasElement.toDataURL('image/png');
  photo.setAttribute('src', data);
}

function scan() {
  try {
    qrcode.decode();
  } catch (e) {
    setTimeout(scan, 300);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcmMvcXJDb2RlU2Nhbm5lci5qcyJdLCJuYW1lcyI6WyJxcmNvZGUiLCJ3aW5kb3ciLCJ2aWRlbyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNhbnZhc0VsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImdldENvbnRleHQiLCJxclJlc3VsdCIsIm91dHB1dERhdGEiLCJidG5TY2FuUVIiLCJzY2FubmluZyIsImNhbGxiYWNrIiwicmVzIiwiaW5uZXJUZXh0Iiwic3JjT2JqZWN0IiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwic3RvcCIsImhpZGRlbiIsIm9uY2xpY2siLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJmYWNpbmdNb2RlIiwidGhlbiIsInN0cmVhbSIsInNldEF0dHJpYnV0ZSIsInBsYXkiLCJ0aWNrIiwic2NhbiIsImhlaWdodCIsInZpZGVvSGVpZ2h0Iiwid2lkdGgiLCJ2aWRlb1dpZHRoIiwiZHJhd0ltYWdlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGVjb2RlIiwiZSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQXRCO0FBRUEsSUFBTUUsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtBQUNBLElBQU1DLGFBQWEsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFdBQXhCLENBQXRCO0FBQ0EsSUFBTUMsTUFBTSxHQUFHRixhQUFhLENBQUNHLFVBQWQsQ0FBeUIsSUFBekIsQ0FBZjtBQUVBLElBQU1DLFFBQVEsR0FBR04sUUFBUSxDQUFDRyxjQUFULENBQXdCLFdBQXhCLENBQWpCO0FBQ0EsSUFBTUksVUFBVSxHQUFHUCxRQUFRLENBQUNHLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBbkI7QUFDQSxJQUFNSyxTQUFTLEdBQUdSLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixhQUF4QixDQUFsQjtBQUVBLElBQUlNLFFBQVEsR0FBRyxLQUFmOztBQUVBWixNQUFNLENBQUNhLFFBQVAsR0FBa0IsVUFBQUMsR0FBRyxFQUFJO0FBQ3ZCLE1BQUlBLEdBQUosRUFBUztBQUNQSixJQUFBQSxVQUFVLENBQUNLLFNBQVgsR0FBdUJELEdBQXZCO0FBQ0FGLElBQUFBLFFBQVEsR0FBRyxLQUFYO0FBRUFWLElBQUFBLEtBQUssQ0FBQ2MsU0FBTixDQUFnQkMsU0FBaEIsR0FBNEJDLE9BQTVCLENBQW9DLFVBQUFDLEtBQUssRUFBSTtBQUMzQ0EsTUFBQUEsS0FBSyxDQUFDQyxJQUFOO0FBQ0QsS0FGRDtBQUlBWCxJQUFBQSxRQUFRLENBQUNZLE1BQVQsR0FBa0IsS0FBbEI7QUFDQWhCLElBQUFBLGFBQWEsQ0FBQ2dCLE1BQWQsR0FBdUIsSUFBdkI7QUFDQVYsSUFBQUEsU0FBUyxDQUFDVSxNQUFWLEdBQW1CLEtBQW5CO0FBQ0Q7QUFDRixDQWJEOztBQWVBVixTQUFTLENBQUNXLE9BQVYsR0FBb0IsWUFBTTtBQUN4QkMsRUFBQUEsU0FBUyxDQUFDQyxZQUFWLENBQ0dDLFlBREgsQ0FDZ0I7QUFBRXZCLElBQUFBLEtBQUssRUFBRTtBQUFFd0IsTUFBQUEsVUFBVSxFQUFFO0FBQWQ7QUFBVCxHQURoQixFQUVHQyxJQUZILENBRVEsVUFBU0MsTUFBVCxFQUFpQjtBQUNyQmhCLElBQUFBLFFBQVEsR0FBRyxJQUFYO0FBQ0FILElBQUFBLFFBQVEsQ0FBQ1ksTUFBVCxHQUFrQixJQUFsQjtBQUNBVixJQUFBQSxTQUFTLENBQUNVLE1BQVYsR0FBbUIsSUFBbkI7QUFDQWhCLElBQUFBLGFBQWEsQ0FBQ2dCLE1BQWQsR0FBdUIsS0FBdkI7QUFDQW5CLElBQUFBLEtBQUssQ0FBQzJCLFlBQU4sQ0FBbUIsYUFBbkIsRUFBa0MsSUFBbEMsRUFMcUIsQ0FLb0I7O0FBQ3pDM0IsSUFBQUEsS0FBSyxDQUFDYyxTQUFOLEdBQWtCWSxNQUFsQjtBQUNBMUIsSUFBQUEsS0FBSyxDQUFDNEIsSUFBTjtBQUNBQyxJQUFBQSxJQUFJO0FBQ0pDLElBQUFBLElBQUk7QUFDTCxHQVpIO0FBYUQsQ0FkRDs7QUFnQkEsU0FBU0QsSUFBVCxHQUFnQjtBQUNkMUIsRUFBQUEsYUFBYSxDQUFDNEIsTUFBZCxHQUF1Qi9CLEtBQUssQ0FBQ2dDLFdBQTdCO0FBQ0E3QixFQUFBQSxhQUFhLENBQUM4QixLQUFkLEdBQXNCakMsS0FBSyxDQUFDa0MsVUFBNUI7QUFDQTdCLEVBQUFBLE1BQU0sQ0FBQzhCLFNBQVAsQ0FBaUJuQyxLQUFqQixFQUF3QixDQUF4QixFQUEyQixDQUEzQixFQUE4QkcsYUFBYSxDQUFDOEIsS0FBNUMsRUFBbUQ5QixhQUFhLENBQUM0QixNQUFqRTtBQUVBckIsRUFBQUEsUUFBUSxJQUFJMEIscUJBQXFCLENBQUNQLElBQUQsQ0FBakM7QUFDRDs7QUFFRCxTQUFTQyxJQUFULEdBQWdCO0FBQ2QsTUFBSTtBQUNGaEMsSUFBQUEsTUFBTSxDQUFDdUMsTUFBUDtBQUNELEdBRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7QUFDVkMsSUFBQUEsVUFBVSxDQUFDVCxJQUFELEVBQU8sR0FBUCxDQUFWO0FBQ0Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHFyY29kZSA9IHdpbmRvdy5xcmNvZGU7XG5cbmNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xuY29uc3QgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXItY2FudmFzXCIpO1xuY29uc3QgY2FudmFzID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmNvbnN0IHFyUmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxci1yZXN1bHRcIik7XG5jb25zdCBvdXRwdXREYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXREYXRhXCIpO1xuY29uc3QgYnRuU2NhblFSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tc2Nhbi1xclwiKTtcblxubGV0IHNjYW5uaW5nID0gZmFsc2U7XG5cbnFyY29kZS5jYWxsYmFjayA9IHJlcyA9PiB7XG4gIGlmIChyZXMpIHtcbiAgICBvdXRwdXREYXRhLmlubmVyVGV4dCA9IHJlcztcbiAgICBzY2FubmluZyA9IGZhbHNlO1xuXG4gICAgdmlkZW8uc3JjT2JqZWN0LmdldFRyYWNrcygpLmZvckVhY2godHJhY2sgPT4ge1xuICAgICAgdHJhY2suc3RvcCgpO1xuICAgIH0pO1xuXG4gICAgcXJSZXN1bHQuaGlkZGVuID0gZmFsc2U7XG4gICAgY2FudmFzRWxlbWVudC5oaWRkZW4gPSB0cnVlO1xuICAgIGJ0blNjYW5RUi5oaWRkZW4gPSBmYWxzZTtcbiAgfVxufTtcblxuYnRuU2NhblFSLm9uY2xpY2sgPSAoKSA9PiB7XG4gIG5hdmlnYXRvci5tZWRpYURldmljZXNcbiAgICAuZ2V0VXNlck1lZGlhKHsgdmlkZW86IHsgZmFjaW5nTW9kZTogXCJlbnZpcm9ubWVudFwiIH0gfSlcbiAgICAudGhlbihmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgIHNjYW5uaW5nID0gdHJ1ZTtcbiAgICAgIHFyUmVzdWx0LmhpZGRlbiA9IHRydWU7XG4gICAgICBidG5TY2FuUVIuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIGNhbnZhc0VsZW1lbnQuaGlkZGVuID0gZmFsc2U7XG4gICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoXCJwbGF5c2lubGluZVwiLCB0cnVlKTsgLy8gcmVxdWlyZWQgdG8gdGVsbCBpT1Mgc2FmYXJpIHdlIGRvbid0IHdhbnQgZnVsbHNjcmVlblxuICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgdGljaygpO1xuICAgICAgc2NhbigpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gdGljaygpIHtcbiAgY2FudmFzRWxlbWVudC5oZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgY2FudmFzRWxlbWVudC53aWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gIGNhbnZhcy5kcmF3SW1hZ2UodmlkZW8sIDAsIDAsIGNhbnZhc0VsZW1lbnQud2lkdGgsIGNhbnZhc0VsZW1lbnQuaGVpZ2h0KTtcblxuICBzY2FubmluZyAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG59XG5cbmZ1bmN0aW9uIHNjYW4oKSB7XG4gIHRyeSB7XG4gICAgcXJjb2RlLmRlY29kZSgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgc2V0VGltZW91dChzY2FuLCAzMDApO1xuICB9XG59XG4iXX0=
//# sourceURL=https://ilrm9.csb.app/src/qrCodeScanner.js