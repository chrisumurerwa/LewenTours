exports.GalleryDocs = {
  "/api/v1/gallery": {
    post: {
      tags: ["Gallery"],
      summary: "Create a new gallery",
      description: "Create a new gallery",
      operationId: "createGallery",
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                title: {
                  type: "string",
                  description: "Gallery title",
                  example: "Mountain Images",
                  required: true,
                },
                images: {
                  type: "array",
                  items: {
                    type: "file",
                    description: "Gallery image",
                    required: true,
                  },
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              type: "object",
              example: {
                title: "Mountain Images",
                images: [],
              },
            },
          },
        },
      },
    },
  },
};