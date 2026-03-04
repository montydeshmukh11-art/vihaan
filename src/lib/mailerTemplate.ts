export const mailerTemplate = (
    name: string,
    email: string,
    enrollment: string,
    phone: string,
    department: string,
    event: string,
    teamMembers: { name: string; enrollment: string }[]
) => {
    const teamMemberRows = teamMembers
        .filter((m) => m.name.trim() !== "")
        .map(
            (member, index) => `
      <tr>
        <td style="padding: 8px 0;">
          <table cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="width: 36px; height: 36px; background-color: rgba(238,189,43,0.2); border-radius: 50%; text-align: center; vertical-align: middle; color: #eebd2b; font-weight: bold; font-size: 14px;">
                ${index + 1}
              </td>
              <td style="padding-left: 12px;">
                <p style="margin: 0; font-size: 14px; font-weight: 600; color: #f1f5f9;">${member.name}</p>
                <p style="margin: 2px 0 0; font-size: 12px; color: #94a3b8;">${member.enrollment || (index === 0 ? "Team Lead" : "Member")}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    `
        )
        .join("");

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Registration Confirmed - Vihaan 2026</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td { font-family: Arial, sans-serif !important; }
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #1a1610; font-family: 'Segoe UI', Arial, sans-serif; -webkit-font-smoothing: antialiased;">

  <!-- Outer wrapper -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #1a1610;">
    <tr>
      <td align="center" style="padding: 20px 10px;">

        <!-- Inner container -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; width: 100%; background-color: #221d10; border-radius: 12px; overflow: hidden;">

          <!-- HEADER -->
          <tr>
            <td style="padding: 24px 30px; border-bottom: 1px solid rgba(238,189,43,0.2);">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="color: #eebd2b; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">
                    &#9670; VIHAAN 2026
                  </td>
                  <td align="right" style="color: #eebd2b; font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;">
                    OFFICIAL CONFIRMATION
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- HERO BANNER -->
          <tr>
            <td style="padding: 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="background: linear-gradient(180deg, rgba(34,29,16,0.3) 0%, rgba(34,29,16,0.95) 100%), #2a2416; padding: 50px 30px 40px; text-align: left;">
                    <span style="display: inline-block; background-color: #eebd2b; color: #221d10; font-size: 11px; font-weight: 700; padding: 5px 14px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">
                      ✓ Registered
                    </span>
                    <h1 style="margin: 12px 0 0; font-size: 32px; font-weight: 800; color: #ffffff; line-height: 1.2;">
                      See you at the stage! 🎉
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- GREETING -->
          <tr>
            <td style="padding: 30px 30px 10px;">
              <h2 style="margin: 0 0 12px; font-size: 26px; font-weight: 700; color: #f1f5f9;">
                Hello ${name},
              </h2>
              <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #94a3b8;">
                You are officially registered for
                <strong style="color: #eebd2b;">Vihaan 2026</strong>
                at Radharaman Group of Institute. Get ready to showcase your talent and compete with the best in the city!
              </p>
            </td>
          </tr>

          <!-- REGISTRATION DETAILS -->
          <tr>
            <td style="padding: 20px 30px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: rgba(238,189,43,0.05); border: 1px solid rgba(238,189,43,0.2); border-radius: 12px;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 4px; font-size: 11px; font-weight: 700; color: #eebd2b; text-transform: uppercase; letter-spacing: 2px;">
                      Your Details
                    </p>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top: 16px;">
                      <tr>
                        <td style="padding: 8px 0; font-size: 13px; color: #94a3b8; width: 120px;">Name</td>
                        <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #f1f5f9;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-size: 13px; color: #94a3b8; border-top: 1px solid rgba(238,189,43,0.1);">Email</td>
                        <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #f1f5f9; border-top: 1px solid rgba(238,189,43,0.1);">${email}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-size: 13px; color: #94a3b8; border-top: 1px solid rgba(238,189,43,0.1);">Enrollment</td>
                        <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #f1f5f9; border-top: 1px solid rgba(238,189,43,0.1);">${enrollment}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-size: 13px; color: #94a3b8; border-top: 1px solid rgba(238,189,43,0.1);">Phone</td>
                        <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #f1f5f9; border-top: 1px solid rgba(238,189,43,0.1);">${phone}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-size: 13px; color: #94a3b8; border-top: 1px solid rgba(238,189,43,0.1);">Department</td>
                        <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #f1f5f9; border-top: 1px solid rgba(238,189,43,0.1);">${department}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- EVENT CATEGORY -->
          <tr>
            <td style="padding: 10px 30px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: rgba(238,189,43,0.05); border: 1px solid rgba(238,189,43,0.2); border-radius: 12px;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 4px; font-size: 11px; font-weight: 700; color: #eebd2b; text-transform: uppercase; letter-spacing: 2px;">
                      Selected Category
                    </p>
                    <p style="margin: 8px 0 0; font-size: 22px; font-weight: 700; color: #f1f5f9;">
                      ${event}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- TEAM DETAILS -->
          ${teamMemberRows
            ? `
          <tr>
            <td style="padding: 10px 30px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: rgba(238,189,43,0.05); border: 1px solid rgba(238,189,43,0.2); border-radius: 12px;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 16px; font-size: 16px; font-weight: 700; color: #f1f5f9;">
                      👥 Team Members
                    </p>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                      ${teamMemberRows}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          `
            : ""
        }

          <!-- EVENT LOGISTICS -->
          <tr>
            <td style="padding: 20px 30px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: rgba(238,189,43,0.08); border: 1px solid rgba(238,189,43,0.2); border-radius: 12px;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 20px; font-size: 18px; font-weight: 700; color: #f1f5f9;">
                      📋 Event Logistics
                    </p>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 12px 0; vertical-align: top; width: 50%;">
                          <p style="margin: 0; font-size: 24px;">🕗</p>
                          <p style="margin: 6px 0 2px; font-size: 11px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px;">Reporting Time</p>
                          <p style="margin: 4px 0 0; font-size: 16px; font-weight: 700; color: #f1f5f9;">08:30 AM Sharp</p>
                        </td>
                        <td style="padding: 12px 0; vertical-align: top; width: 50%;">
                          <p style="margin: 0; font-size: 24px;">📍</p>
                          <p style="margin: 6px 0 2px; font-size: 11px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px;">Venue</p>
                          <p style="margin: 4px 0 0; font-size: 16px; font-weight: 700; color: #f1f5f9;">Main Auditorium, RGI Campus</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA BUTTONS -->
          <tr>
            <td style="padding: 10px 30px 30px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding: 0 4px;" width="50%">
                    <a href="#" style="display: block; background-color: #eebd2b; color: #221d10; font-size: 14px; font-weight: 700; text-decoration: none; padding: 14px 20px; border-radius: 10px; text-align: center;">
                      📖 Download Rulebook
                    </a>
                  </td>
                  <td align="center" style="padding: 0 4px;" width="50%">
                    <a href="#" style="display: block; background-color: rgba(238,189,43,0.15); color: #f1f5f9; font-size: 14px; font-weight: 700; text-decoration: none; padding: 14px 20px; border-radius: 10px; text-align: center;">
                      🗺️ View Location
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="border-top: 1px solid rgba(238,189,43,0.2); padding: 30px; text-align: center;">
              <p style="margin: 0; font-size: 13px; color: #94a3b8;">
                If you have any questions, feel free to contact the organizing committee at
              </p>
              <p style="margin: 6px 0 0;">
                <a href="mailto:support@vihaan2026.edu" style="color: #eebd2b; font-weight: 700; text-decoration: none; font-size: 14px;">
                  support@vihaan2026.edu
                </a>
              </p>
              <p style="margin: 24px 0 0; font-size: 11px; color: #64748b;">
                © 2026 Radharaman Group of Institute. All Rights Reserved.
              </p>
            </td>
          </tr>

        </table>
        <!-- End inner container -->

      </td>
    </tr>
  </table>
  <!-- End outer wrapper -->

</body>
</html>
  `;
};