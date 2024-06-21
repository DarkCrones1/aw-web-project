import { CultureCreateRequestDto } from "@/dtos/request/create/CultureCreateRequestDto";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ikl2YW5HYXJjaWEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiSXZhbiBHdWFkYWx1cGUgR2FyY2lhIEZsb3JlcyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Iml2YW5AZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2RhdGVvZmJpcnRoIjoiMTYvMDMvMjAyNCAwMjoxNDowNCBwLiBtLiIsIlVzZXJBY2NvdW50VHlwZSI6IjIiLCJDcmFmdG1hbklkIjoiMSIsIm5iZiI6MTcxMDYyMDA0NCwiZXhwIjoxNzEwNjU2MDQ0LCJpc3MiOiJodHRwczovL2dpdGh1Yi5jb20vRGFya0Nyb25lczEiLCJhdWQiOiJodHRwczovL2dpdGh1Yi5jb20vRGFya0Nyb25lczEifQ.DqaVb00HhBd-q2NrpY9-_ebug_mWTDi_QAFVEUF6F70";

export async function PostCulture(
  formData: CultureCreateRequestDto
): Promise<void> {
  const response = await fetch("http://localhost:5149/api/Culture", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) throw new Error("Error al enviar datos");
}
