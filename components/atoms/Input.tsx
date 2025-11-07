"use client";

export default function Input({ text }: { text: string }) {
  return (
    <div>
      <label htmlFor={text} >{text}</label>
      <input type={text} />
    </div>
  );
}
