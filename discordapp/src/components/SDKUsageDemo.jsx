'use client';

async function addSticky() {
  const stickyNote = await miro.board.createStickyNote({
    content: 'Hello, World!',
  });
  await miro.board.viewport.zoomTo(stickyNote);
}
const createImage =  () => {
    const image = window.miro.board.createImage( {
        url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        x: 0,
        y: 0,
        width: 1000,
        height: 100,
        rotation:0.0,
    });
    return image;
}

async function apiCall(method, url) {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.status !== 200) {
        throw new Error("API call failed: " + response.status + " " + response.statusText);
    }
    return response.json(); // Assuming the API returns JSON data
}

const checkRestApi = async () => {
    console.log("Checking rest api");
    try {
        const data = await apiCall("GET", "/api/restFunction");
        console.log("Success message:", data.message); // Log the 'message' from the data object
    } catch (error) {
        console.error("API call failed with message:", error.message);
    }
}

export const SDKUsageDemo = () => {
  return (
    <div>
      <h3>SDK Usage Demo</h3>
      <p className="p-small">SDK doesnt need to be authenticated.</p>
      <p>
        Apps that use the SDK should run inside a Miro board. During
        development, you can open this app inside a{' '}
        <a href="https://developers.miro.com/docs/build-your-first-hello-world-app#step-2-try-out-your-app-in-miro">
          Miro board
        </a>
        .
      </p>
      <button
        type="button"
        onClick={addSticky}
        className="button button-primary"
      >
        Add a sticky
      </button>
        <button onClick={createImage} className={"button button-primary"} type="button">Click me for some shit that works</button>
        <button onClick={checkRestApi} className={"button button-primary"} type="button">Click me for some backend shit that works</button>
    </div>
  );
};
