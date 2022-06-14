import QRCode from "qrcode";
import React, { useState } from "react";

const QRcode = () => {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
      },
      (err, url) => {
        if (err) {
          return console.error(err);
        }
        setQr(url);
      }
    );
  };

  return (
    <div className="flex flex-col items-center gap-2 ">
      <h1 className="text-2xl font-semibold mt-4">QR Generator</h1>
      <div>
        <input
          type="text"
          placeholder="e.g. https://google.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="outline-none border-2 px-2 py-1 rounded focus:border-blue-800 "
        />
        <button
          className="mx-4 text-base bg-blue-900 text-white px-3 py-2 rounded"
          onClick={GenerateQRCode}
        >
          Generate
        </button>
      </div>

      {qr && (
        <>
          <img src={qr} className=" w-60" />
          <button
            href={qr}
            download="qrcode.png"
            className="mx-4 text-base bg-green-700 text-white px-3 py-2 rounded"
          >
            Download
          </button>
        </>
      )}
    </div>
  );
};

export default QRcode;
