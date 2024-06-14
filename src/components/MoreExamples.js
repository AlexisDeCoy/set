import Shape from "./Shape";
import ShapeData from "../data/ShapeData";

const MoreExamples = () => {
    return (
        <>
            <div className="example">
                <Shape color='#800080' fill='none' shape={ShapeData.diamond} />
                <div className="fx">
                    <Shape color='#800080' fill='none' shape={ShapeData.diamond} />
                    <Shape color='#800080' fill='none' shape={ShapeData.diamond} />
                </div>
                <div className="fx">
                    <Shape color='#800080' fill='none' shape={ShapeData.diamond} />
                    <Shape color='#800080' fill='none' shape={ShapeData.diamond} />
                    <Shape color='#800080' fill='none' shape={ShapeData.diamond} />
                </div>
            </div>
            <hr className="example" />
            <div className="example">
                <div className="fx">
                    <Shape color='#008000' fill='none' shape={ShapeData.diamond} />
                    <Shape color='#008000' fill='none' shape={ShapeData.diamond} />
                </div>
                <div className="fx">
                    <Shape color='#800080' fill='#stripedHorizontal' shape={ShapeData.squiggle} />
                    <Shape color='#800080' fill='#stripedHorizontal' shape={ShapeData.squiggle} />
                </div>
                <div className="fx">
                    <Shape color='#FF0000' fill='color' shape={ShapeData.oval} />
                    <Shape color='#FF0000' fill='color' shape={ShapeData.oval} />
                </div>
            </div>
            <hr className="example" />
            <div className="example">
                <Shape color='#008000' fill='none' shape={ShapeData.diamond} />
                <Shape color='#800080' fill='none' shape={ShapeData.squiggle} />
                <Shape color='#FF0000' fill='none' shape={ShapeData.oval} />
            </div>
            <hr className="example" />
            <div className="example">
                <div className="fx">
                    <Shape color='#008000' fill='#stripedHorizontal' shape={ShapeData.squiggle} />
                    <Shape color='#008000' fill='#stripedHorizontal' shape={ShapeData.squiggle} />
                    <Shape color='#008000' fill='#stripedHorizontal' shape={ShapeData.squiggle} />
                </div>
                <div className="fx">
                    <Shape color='#800080' fill='#stripedHorizontal' shape={ShapeData.squiggle} />
                    <Shape color='#800080' fill='#stripedHorizontal' shape={ShapeData.squiggle} />
                    <Shape color='#800080' fill='#stripedHorizontal' shape={ShapeData.squiggle} />
                </div>
                <div className="fx">
                    <Shape color='#FF0000' fill='#stripedHorizontal' shape={ShapeData.squiggle} />
                    <Shape color='#FF0000' fill='#stripedHorizontal' shape={ShapeData.squiggle} />
                    <Shape color='#FF0000' fill='#stripedHorizontal' shape={ShapeData.squiggle} />
                </div>
            </div>
            <hr className="example" />
            <div className="example">
                <Shape color='#800080' fill='none' shape={ShapeData.oval} />
                <div className="fx">
                    <Shape color='#008000' fill='color' shape={ShapeData.oval} />
                    <Shape color='#008000' fill='color' shape={ShapeData.oval} />
                </div>
                <div className="fx">
                    <Shape color='#FF0000' fill='#stripedHorizontal' shape={ShapeData.oval} />
                    <Shape color='#FF0000' fill='#stripedHorizontal' shape={ShapeData.oval} />
                    <Shape color='#FF0000' fill='#stripedHorizontal' shape={ShapeData.oval} />
                </div>
            </div>
            <hr className="example" />
            <div className="example">
                <div className="fx">
                    <Shape color='#008000' fill='color' shape={ShapeData.diamond} />
                    <Shape color='#008000' fill='color' shape={ShapeData.diamond} />
                </div>
                <div className="fx">
                    <Shape color='#800080' fill='color' shape={ShapeData.diamond} />
                    <Shape color='#800080' fill='color' shape={ShapeData.diamond} />
                </div>
                <div className="fx">
                    <Shape color='#FF0000' fill='color' shape={ShapeData.diamond} />
                    <Shape color='#FF0000' fill='color' shape={ShapeData.diamond} />
                </div>
            </div>
            <hr className="example" />
            <div className="example">
                <Shape color='#008000' fill='none' shape={ShapeData.oval} />
                <Shape color='#008000' fill='#stripedHorizontal' shape={ShapeData.oval} />
                <Shape color='#008000' fill='color' shape={ShapeData.oval} />
            </div>
            <hr className="example" />
            <div className="example">
                    <Shape color='#008000' fill='color' shape={ShapeData.diamond} />
                <div className="fx">
                    <Shape color='#800080' fill='none' shape={ShapeData.squiggle} />
                    <Shape color='#800080' fill='none' shape={ShapeData.squiggle} />
                </div>
                <div className="fx">
                    <Shape color='#FF0000' fill='#stripedHorizontal' shape={ShapeData.oval} />
                    <Shape color='#FF0000' fill='#stripedHorizontal' shape={ShapeData.oval} />
                    <Shape color='#FF0000' fill='#stripedHorizontal' shape={ShapeData.oval} />
                </div>
            </div>
        </>
    );
};

export default MoreExamples;