import { columns } from "./columns";
import { DataTable } from "./data-table";
import { google } from "googleapis";

async function getData() {
  // Fetch data from your API here.

  let googleSheets;
  let spreadsheetId;
  let auth;

  const googleApiInitialize = async () => {
    // google api intiallization
    auth = new google.auth.GoogleAuth({
      keyFile: "credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    // Create client instance for auth
    const client = await auth.getClient();

    // Instance of Google Sheets API
    googleSheets = google.sheets({ version: "v4", auth: client });

    spreadsheetId = "1eED-7pFb_yj_RlfDciCfr7NStskXmLunt2s9Yo4valo";
  };

  await googleApiInitialize();

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1"
  });

  let isWomens = false;
  const data = getRows.data.values
    .filter((item, index) => {
      if (item.includes("Девушки")) {
        isWomens = true;
      }

      if (isWomens && Number(item[0])) return true;
    })
    .map((item) => {
      return {
        id: item[0],
        name: item[1],
        surname: item[2]
      };
    });
  console.log(data);
  return data;

  //   return [
  //     {
  //       id: 414343,
  //       name: "Alex",
  //       surname: "Ford",
  //       score: 10
  //     },
  //     {
  //       id: 424343,
  //       name: "Ilon",
  //       surname: "Mask",
  //       score: 12
  //     },
  //     {
  //       id: 434343,
  //       name: "Britni",
  //       surname: "Spears",
  //       score: 22
  //     },
  //     {
  //       id: 444343,
  //       name: "Jordge",
  //       surname: "Washington",
  //       score: 52
  //     }
  //   ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container w-screen h-screen">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
