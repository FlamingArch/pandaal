import { AppBar, Button, Page } from "../components";
import { IconDiversity } from "../components/icons";
import { Branding } from "../fragments";

export default function PageDev() {
  return (
    <Page
      gap={6}
      appBar={
        <AppBar
          sticky
          gap={0}
          leading={
            <Branding padding={{ right: 4, left: 0, top: 0, bottom: 0 }} />
          }
          title={<p className="text-xl font-mono font-[500]"> {`<Dev/>`}</p>}
        />
      }
    >
      <p className="text-2xl font-bold">Buttons</p>
      <div className="grid grid-cols-2 gap-4 items-center">
        <p className="font-mono text-gray-700">
          buttonStyle="
          <span className="text-primary-500 font-medium">emphasis</span>"
        </p>
        <Button
          buttonStyle="emphasis"
          Icon={IconDiversity}
          label="Equality in Diversity"
        />

        <p className="font-mono text-gray-700">
          buttonStyle="
          <span className="text-primary-500 font-medium">primary</span>"
        </p>
        <Button
          buttonStyle="primary"
          Icon={IconDiversity}
          label="Equality in Diversity"
        />

        <p className="font-mono text-gray-700">
          buttonStyle="
          <span className="text-primary-500 font-medium">secondary</span>"
        </p>
        <Button
          buttonStyle="secondary"
          Icon={IconDiversity}
          label="Equality in Diversity"
        />

        <p className="font-mono text-gray-700">
          buttonStyle="
          <span className="text-primary-500 font-medium">actionEmphasis</span>"
        </p>
        <Button
          buttonStyle="actionEmphasis"
          Icon={IconDiversity}
          label="Equality in Diversity"
        />

        <p className="font-mono text-gray-700">
          buttonStyle="
          <span className="text-primary-500 font-medium">action</span>"
        </p>
        <Button
          buttonStyle="action"
          Icon={IconDiversity}
          label="Equality in Diversity"
        />

        <p className="font-mono text-gray-700">
          buttonStyle="
          <span className="text-primary-500 font-medium">actionSecondary</span>"
        </p>
        <Button
          buttonStyle="actionSecondary"
          Icon={IconDiversity}
          label="Equality in Diversity"
        />

        <p className="font-mono text-gray-700">
          buttonStyle="
          <span className="text-primary-500 font-medium">
            actionSecondaryInvert
          </span>
          "
        </p>
        <Button
          buttonStyle="actionSecondaryInvert"
          Icon={IconDiversity}
          label="Equality in Diversity"
        />

        <p className="font-mono text-gray-700">
          buttonStyle="
          <span className="text-primary-500 font-medium">
            actionSecondaryWhite
          </span>
          "
        </p>
        <Button
          buttonStyle="actionSecondaryWhite"
          Icon={IconDiversity}
          label="Equality in Diversity"
        />

        <p className="font-mono text-gray-700">
          buttonStyle="
          <span className="text-primary-500 font-medium">
            actionSecondaryBlack
          </span>
          "
        </p>
        <Button
          buttonStyle="actionSecondaryBlack"
          Icon={IconDiversity}
          label="Equality in Diversity"
        />
      </div>
    </Page>
  );
}
