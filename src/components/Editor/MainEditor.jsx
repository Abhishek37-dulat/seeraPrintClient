import { Box, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import FontFamily from "./TopFileds/FontFamily";
import FontSizeBox from "./TopFileds/FontSizeBox";
import BoldFontBox from "./TopFileds/BoldFontBox";
import ItalicFontBox from "./TopFileds/ItalicFontBox";
import UnderLineFontBox from "./TopFileds/UnderLineFontBox";
import ColorBox from "./TopFileds/ColorBox";
import LeftFileds from "./LeftFileds/LeftFileds";
import RightFileds from "./RightFileds/RightFileds";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { fabric } from "fabric";
import BackgroundColorChangeBox from "./TopFileds/BackgroundColorChangeBox";
import BackgroundImage from "./TopFileds/BackgroundImage";
import BackgroundImageBoxSlider from "./TopFileds/BackgroundImageSliderTopBottom";
import BackgroundImageBoxSliderLeftRight from "./TopFileds/BackgroundImageSliderLeftRight";
import BackgroundImageDrawer from "./TopFileds/BackgroundImageDrawer";
import ShapeColorsDrawers from "./TopFileds/ShapeColorsDrawers";
import DownloadImage from "./TopFileds/DownloadImage";
import PreviewImage from "./TopFileds/PreviewImage";
import _ from "lodash";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  //   overflow: "hidden",

  //   [theme.breakpoints.down("lsm")]: {
  //     flexDirection: "column",
  //   },
}));
const TopEditor = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  // position: "fixed",
  top: "0px",
  left: "0px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100px",
  boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
  zIndex: 2,
  backgroundColor: "#fff",

  //   [theme.breakpoints.down("lsm")]: {
  //     flexDirection: "column",
  //   },
}));
const BothEditor = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  //   overflow: "hidden",

  //   [theme.breakpoints.down("lsm")]: {
  //     flexDirection: "column",
  //   },
}));
const LeftEditor = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100px",
  marginTop: "150px",
  padding: "5px 10px",
  zIndex: 10,

  //   [theme.breakpoints.down("lsm")]: {
  //     flexDirection: "column",
  //   },
}));
const RightEditor = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-end",
  width: "100%",
  marginTop: "150px",
  padding: "5px 10px",
  zIndex: 1,

  //   [theme.breakpoints.down("lsm")]: {
  //     flexDirection: "column",
  //   },
}));
const BottomBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-end",
  width: "calc(100% - 20px)",
  marginTop: "20px",
  padding: "5px 10px",
  "&>button": {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    fontFamily: "'Prompt', sans-serif",
    fontSize: "18px",
    fontWeight: "400",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.5s",
    ":hover": {
      transform: "scale(1.05)",
    },
    ":active": {
      transform: "scale(1)",
    },
  },

  //   [theme.breakpoints.down("lsm")]: {
  //     flexDirection: "column",
  //   },
}));
const CanvasPreview = ({ canvas }) => {
  useEffect(() => {
    if (!canvas) {
      console.log("Canvas not available");
      return;
    }

    console.log("Original canvas objects:", canvas.getObjects());

    const previewCanvas = new fabric.Canvas("canvas-preview", {
      width: 355 * 2,
      height: 220 * 2,
    });

    canvas.getObjects().forEach((originalObj) => {
      const clonedObj = _.cloneDeep(originalObj);
      previewCanvas.add(clonedObj);
    });

    previewCanvas.renderAll();

    console.log("Preview canvas objects:", previewCanvas.getObjects());

    return () => {
      previewCanvas.dispose();
    };
  }, [canvas]);
};

const MainEditor = () => {
  const { editor, onReady } = useFabricJSEditor();
  const [selectFontFamily, setSelectFontFamily] = useState("Arial, sans-serif");
  const [selectFontSize, setSelectFontSize] = useState("16");
  const [selectFontBold, setSelectFontBold] = useState(false);
  const [selectFontItalic, setSelectFontItalic] = useState(false);
  const [selectFontUnderLine, setSelectFontUnderLine] = useState(false);
  const [selectColor, setSelectColor] = useState("#1e1e1e");
  const [backSelectColor, setBackSelectColor] = useState("#D6D6D6");
  const [textFieldValue, setTextFieldValue] = useState("");
  const [backgroundImageBox, setBackgroundImageBox] = useState(null);
  const [valueForTopBottom, setValueForTopBottom] = useState(10);
  const [valueForLeftRight, setValueForLeftRight] = useState(10);
  const [imagevalueForTopBottom, setImageValueForTopBottom] = useState(1);
  const [imagevalueForLeftRight, setImageValueForLeftRight] = useState(1);
  const [shapDrawerCon, setShapDrawerCon] = useState(false);
  const [shapeBackSelectColor, setShapeBackSelectColor] = useState("#1e1e1e");
  const [shapeStrokeWidth, setShapeStrokeWidth] = useState(0);
  const [shapeStrokeColor, setShapeStrokeColor] = useState("#1e1e1e");

  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    if (editor) {
      setCanvas(editor.canvas);
    }
  }, [editor]);
  const addImage = (file) => {
    // const imageurl = URL.createObjectURL(file).slice(5);
    // const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        fabric.Image.fromURL(imageUrl, (img) => {
          editor?.canvas?.add(img);
        });
      };
      reader.readAsDataURL(file);
    }
  };

  console.log(
    selectFontFamily,
    selectFontSize,
    selectFontBold,
    selectFontItalic,
    selectFontUnderLine,
    selectColor
  );

  const addText = (value) => {
    editor?.addText(value);
  };
  const addBackGroundColor = (colorValue) => {
    editor?.canvas.setBackgroundColor(colorValue, () => {
      editor?.canvas.renderAll();
    });
  };

  const addRectangle = () => {
    const rect = new fabric.Rect({
      width: 50,
      height: 50,
      fill: shapeBackSelectColor,
      left: 10,
      top: 10,
    });

    editor?.canvas?.add(rect);
  };

  const addCircle = () => {
    const circle = new fabric.Circle({
      radius: 25,
      fill: shapeBackSelectColor,
      left: 70,
      top: 10,
    });

    editor?.canvas?.add(circle);
  };

  const addTriangle = () => {
    const triangle = new fabric.Triangle({
      width: 50,
      height: 50,
      fill: shapeBackSelectColor,
      left: 130,
      top: 10,
    });

    editor?.canvas?.add(triangle);
  };
  const addStar = () => {
    const star = new fabric.Path(
      "M 194.14953,0.000001 244.24358,123.22311 384.14847,140.91619 274.2439,232.5729 301.07894,372.7798 194.14953,306.44688 87.220105,372.7798 114.05516,232.5729 4.1502764,140.91619 144.05517,123.22311 194.14953,0.000001 z",
      {
        fill: shapeBackSelectColor,
        left: 190,
        top: 70,
      }
    );

    editor?.canvas?.add(star);
  };
  const addHeart = () => {
    const heart = new fabric.Path(
      "M 272.70141,238.71731 C 206.46141,238.71731 152.70146,292.4773 152.70146,358.71731 C 152.70146,493.47282 288.63461,528.80461 381.26391,662.02535 C 468.83815,529.62199 609.82641,489.17075 609.82641,358.71731 C 609.82641,292.47731 556.06651,238.7173 489.82641,238.71731 C 441.77851,238.71731 400.42481,267.08774 381.26391,307.90481 C 362.10311,267.08773 320.74941,238.7173 272.70141,238.71731  z",
      {
        fill: shapeBackSelectColor,
        left: 190,
        top: 70,
      }
    );

    editor?.canvas?.add(heart);
  };
  const addPentagon = () => {
    const pentagon = new fabric.Path(
      "M 250 50 L 450 150 L 400 300 L 250 450 L 100 300 Z",
      {
        fill: shapeBackSelectColor,
        left: 190,
        top: 70,
      }
    );

    editor?.canvas?.add(pentagon);
  };
  const addHexagon = () => {
    const hexagon = new fabric.Path(
      "M 250 50 L 450 150 L 450 350 L 250 450 L 50 350 L 50 150 Z",
      {
        fill: shapeBackSelectColor,
        left: 190,
        top: 70,
      }
    );

    editor?.canvas?.add(hexagon);
  };
  const addShapeBackGroundColor = (color) => {
    setBackSelectColor(color);
    const activeObject = editor?.canvas?.getActiveObject();

    if (activeObject) {
      activeObject.set("fill", color);
      editor?.canvas?.renderAll();
    }
  };
  const addShapeStrokeColor = (color) => {
    setShapeStrokeColor(color);
    const activeObject = editor?.canvas?.getActiveObject();

    if (activeObject) {
      activeObject.set("stroke", color);
      editor?.canvas?.renderAll();
    }
  };
  const addShapeStrokeWidth = (width) => {
    setShapeStrokeColor(width);
    const activeObject = editor?.canvas?.getActiveObject();

    if (activeObject) {
      activeObject.set("strokeWidth", width);
      editor?.canvas?.renderAll();
    }
  };

  useEffect(() => {
    editor?.canvas?.on("selection:created", (e) => {
      const selectedObject = e.target;

      if (selectedObject) {
        const selectedShapeBackgroundColor = selectedObject.get("fill");
        setShapeBackSelectColor(selectedShapeBackgroundColor);
      }
    });

    editor?.canvas?.on("selection:cleared", () => {
      setShapeBackSelectColor(backSelectColor);
    });

    return () => {
      editor?.canvas?.off("selection:created");
      editor?.canvas?.off("selection:cleared");
    };
  }, [backSelectColor, editor]);

  useEffect(() => {
    if (backgroundImageBox) {
      const img = new fabric.Image.fromURL(backgroundImageBox, (img) => {
        img.set({
          scaleX: imagevalueForLeftRight,
          scaleY: imagevalueForTopBottom,
          left: valueForLeftRight,
          top: valueForTopBottom,
        });
        editor?.canvas?.setBackgroundImage(
          img,
          editor?.canvas?.renderAll.bind(editor.canvas)
        );
      });
    } else {
      editor?.canvas?.setBackgroundImage(
        null,
        editor?.canvas?.renderAll.bind(editor.canvas)
      );
    }
  }, [
    backgroundImageBox,
    imagevalueForLeftRight,
    imagevalueForTopBottom,
    editor,
  ]);
  console.log(editor);

  return (
    <MainBox>
      <TopEditor>
        {/* <PreviewImage addShape={addShape} /> */}
        <DownloadImage canvas={canvas} />
        <BackgroundImageDrawer
          setValueForTopBottom={setValueForTopBottom}
          setValueForLeftRight={setValueForLeftRight}
          setImageValueForTopBottom={setImageValueForTopBottom}
          setImageValueForLeftRight={setImageValueForLeftRight}
        />
        <BackgroundImage setBackgroundImageBox={setBackgroundImageBox} />

        <FontFamily setSelectFontFamily={setSelectFontFamily} />
        <FontSizeBox setSelectFontSize={setSelectFontSize} />
        <BoldFontBox setSelectFontBold={setSelectFontBold} />
        <ItalicFontBox setSelectFontItalic={setSelectFontItalic} />
        <UnderLineFontBox setSelectFontUnderLine={setSelectFontUnderLine} />
        <ColorBox setSelectColor={setSelectColor} />
        <BackgroundColorChangeBox
          setBackSelectColor={setBackSelectColor}
          addBackGroundColor={addBackGroundColor}
        />
      </TopEditor>
      <BothEditor>
        <LeftEditor>
          <LeftFileds
            textFieldValue={textFieldValue}
            setTextFieldValue={setTextFieldValue}
            addText={addText}
            addImage={addImage}
            addCircle={addCircle}
            addRectangle={addRectangle}
            addTriangle={addTriangle}
            addStar={addStar}
            addHeart={addHeart}
            addHexagon={addHexagon}
            addPentagon={addPentagon}
            setShapDrawerCon={setShapDrawerCon}
          />
          <ShapeColorsDrawers
            shapDrawerCon={shapDrawerCon}
            setShapDrawerCon={setShapDrawerCon}
            setShapeBackSelectColor={setShapeBackSelectColor}
            addShapeBackGroundColor={addShapeBackGroundColor}
            setShapeStrokeColor={setShapeStrokeColor}
            addShapeStrokeColor={addShapeStrokeColor}
            addShapeStrokeWidth={addShapeStrokeWidth}
            setShapeStrokeWidth={setShapeStrokeWidth}
          />
        </LeftEditor>
        <RightEditor>
          <RightFileds
            selectFontFamily={selectFontFamily}
            selectFontSize={selectFontSize}
            selectFontBold={selectFontBold}
            selectFontItalic={selectFontItalic}
            selectFontUnderLine={selectFontUnderLine}
            selectColor={selectColor}
            textFieldValue={textFieldValue}
            setTextFieldValue={setTextFieldValue}
            editor={editor}
            onReady={onReady}
          />
          <CanvasPreview canvas={canvas} />
        </RightEditor>
      </BothEditor>
      <BottomBox>
        <button>Help is here</button>
      </BottomBox>
    </MainBox>
  );
};

export default MainEditor;
