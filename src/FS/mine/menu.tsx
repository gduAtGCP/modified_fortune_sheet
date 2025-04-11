import handleMyMenuClick from './menuClick.tsx'
import  {useContext } from "react";
import Combo from "../react/src/components/Toolbar/Combo.tsx";
import Select, { Option } from "../react/src/components/Toolbar/Select.tsx";
import WorkbookContext from "../react/src/context";

function MyMenu(){
  const { context, setContext, refs, settings, handleUndo, handleRedo } =
    useContext(WorkbookContext);
        const items = [
          {
            text: "M..o...na",
            value: "freeze-row",
          },
          {
            text: "L....is...a",
            value: "freeze-col",
          },
          {
            text: "Traveller.PAIMON",
            value: "freeze-row-col",
          },
          {
            text: "ZZZZZ  ZZZZ",
            value: "freeze-cancel",
          },
        ];
        return (
          <Combo
            text="Menuuuu"
            key="MyMenu"
            tooltip="Ehhhhh...."
          >
            {(setOpen) => (
              <Select>
                {items.map(({ text, value }) => (
                  <Option
                    key={value}
                    onClick={() => {
                      setContext((ctx) => {
                        handleMyMenuClick(ctx, value);
                      });
                      setOpen(false);
                    }}
                  >
                    <div className="fortune-toolbar-menu-line">
                      {text}
                      {/* <SVGIcon name={value} /> */}
                    </div>
                  </Option>
                ))}
              </Select>
            )}
          </Combo>
        );
      }

export default MyMenu
