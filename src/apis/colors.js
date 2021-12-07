import { createAsyncThunk } from "@reduxjs/toolkit";

export const all = () => {
  return fetch("http://localhost:3060/cars") // non-blocking, fetch returns a Promise
    .then(res => res.json());
};

// mark this fn as async
// await :wait for the Promise to be resolved ==> non-blocking
// async and await allows us to manage ==> non-blocking
export const all = async () => {
  try {
    const res = await fetch("http://localhost:3060/colors")
    const colors = await res.json();
    return colors;
  } catch(err) { // === .then() .then() .catch()
    console.log(err);
  };
}

export const append = async (color) => {
  const res = await fetch("http://localhost:3060/colors", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(color),
  });

  const newColor = await res.json();
  return newColor;
}

// lab: add the following methods
// one(colrId: int) -> Promise<Color>
// replace(color: Color) -> Promise<void>
// delete(colorId: int) -> Promise<void>

export const one = async (colorId) => {
  const res = await fetch(`http://localhost:3060/colors/${encodeURIComponent(colorId)}`);
  const color = await res.json();
  return color;
};

export const replace = async (color) => {
  const res = await fetch(`http://localhost:3060/colors/${encodeURIComponent(color.id)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(color),
  });
};

export const deleteColor = async (colorId) => {
  return await fetch(`http://localhost:3060/colors/${encodeURIComponent(colorId)}`, {
    method: 'DELETE',
  });
};