import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { requestToBodyStream } from "next/dist/server/body-streams";

// const GOOGLE_CLIENT_MAIL =
//   "form-sheet@student-integration-368805.iam.gserviceaccount.com";
// const GOOGLE_PRIVATE_KEY =
//   "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDHwfH0o7pPHVLv\nfmB+BU8CpsRIlpHJg/4pWXDlmxcHQQtecqBxzuxK80DIKR9Ritsx/hTM5R8EtGeb\nQixzF/l5e/inAA8rkg+o+0MVGJYng9FLiBVgxUS2PfKif+loGv3js8A4hPR5eR8f\nqAF0GNIcnd6EgHXXX2dcA3EKX7tl3tAuVLjWeAflMB+5ShiwBB7kPi4wN/3yrZGF\n4zDgaDXijLsHX4ATk2b79Ea8JrX3uc7BfwgQSyy3OjXsB9xrCEPslzUOzX1TDnQo\nn6ER8njpADq0viXClD/D/aUEuBsGyzLK42BRYbGfV3oOFnfhCzEZQJK7Z+ygIV1t\n+J6wzPjZAgMBAAECggEAK9FFeZATnWiViW7LjEEuWmrJ6hFLM+y16wyRSPBK7h6s\nt4BF5QkKiItQ5cctdUXT/KSbG/HTasUG6AXtOabj5KvWuI05BqnwsPTCu4Ur5MmT\ntrGIXPSQtLgkedQ8lwc6s4C5tLwnY2D3/InuHbEXH8taZO7HyqFFCyg/GtMyiG7j\nLPA1azy02rbUvDaYabhhBq5Aa/Hvtemj+ZlqHOILHLM+gM+PWkau+ZYc5iNwIn1e\nXZf+6MWZ23q+omHcBjDQOnjRKXdMqbXf9OvGR0QcmUiu/qoPKarE/Wc2oTuUGaVA\nBdIVsISjDJ/Zu0jyGxMGlEyHte/sIxgh5sdBtdFKDQKBgQDqtG9rU+doR3WDduwz\ntfXI0XzZr4qeuRMscVbbYlPf6BbJdopZxL4UNwdkPEZdC5ONgHNWCZCarObLNpsg\nl1DPeKj9HjWR5bJb/7cPTb2S6+O8CjjIYEcWVIGUYgH3/yQU+0zUXBbGPHFu5Oa5\n8Ca0zREI4eug0zQvbR2YnEd7nQKBgQDZ4ceFlm+o4czfhvzRTpNLJIbf0FIPVCXy\niVQ7M/Oq51nhINIVc4w9f1y3waOOQOjuli7BIIA63GlBizUDzhwtU/ggS4L9H5xA\ntjM4cAAHkArou1tz7LIX7oxfMg0nK7CBzgBTHSv6LzMyxHQl4nK1f9AbQmt9Gv7R\ngKMHBcyDbQKBgQCzJhcF7X1s816Xgma48eMx7fVGk99TWCFygvCxdFRhTF5YWMsx\nyiLsezSBJiDvVK7EC4/91D80UVW5N20ha16bfpY+3pg1TQbfgkjQvZ4+Tx/9oC/H\ngvW/7bEa+dRW38FC4q66SbB4kBplcwNKWiyxRPYDua6Ji60BpmA45NELYQKBgFOo\nyb+Vf9JMwSmi3zhO/2d+4vrVNm0EVn3GFT2WOR2KL4yt2Xy7HUIPwT4db/uTGN1j\ndRharmHrd87e8MBBR7hv4XolBGrE1G5Uh15IQvqkaEvshLUCUW+2/NcglMRRljiB\nLMa9EMHDldkMbbyOMpVWOkX9PuCOmQFAb1im9VwRAoGAKTCf/fcA05F0nLRr3WmY\npIWF0TINslHCxywxtZcSLmOiNYAQdVFdEY1G0ifq09fVJxFsVsLU0qtYv2YMyB56\na+m3QlvoZYc8/cJGI1RaDID1Fgsy+aKPltVci6VOuvGs31SMVrI9S5giscKUcQcU\nhmag8fytfNdVAluVw063lSA=\n-----END PRIVATE KEY-----\n";

type SheetForm = {
  //    First Name	Last Name	Phone Number	Email Address	City	State	Course interested in	Highest Qualification
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  course: string;
  qualification: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    return res.status(405).send({ message: "Only POST requests allowed." });
  }

  const body = req.body as SheetForm;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_MAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),

        // client_email: GOOGLE_CLIENT_MAIL,
        // private_key: GOOGLE_PRIVATE_KEY,
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:H1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.firstName,
            body.lastName,
            body.phone,
            body.email,
            body.city,
            body.state,
            body.course,
            body.qualification,
          ],
        ],
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: "Something went wrong" });
  }
}
