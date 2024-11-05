import React from "react";

const Shimmer = () => {
  const shimmerStyle = {
    wrapper: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem",
    },
    card: {
      width: "200px",
      padding: "1rem",
      borderRadius: "8px",
      backgroundColor: "#f0f0f0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    shimmerImage: {
      width: "100%",
      height: "150px",
      background:
        "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
      backgroundSize: "200% 100%",
      borderRadius: "8px",
      animation: "shimmer 1.5s infinite",
    },
    content: {
      width: "100%",
      paddingTop: "1rem",
    },
    title: {
      width: "60%",
      height: "20px",
      marginBottom: "0.5rem",
      background:
        "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
      backgroundSize: "200% 100%",
      animation: "shimmer 1.5s infinite",
      borderRadius: "4px",
    },
    text: {
      width: "80%",
      height: "15px",
      marginBottom: "0.5rem",
      background:
        "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
      backgroundSize: "200% 100%",
      animation: "shimmer 1.5s infinite",
      borderRadius: "4px",
    },
    smallText: {
      width: "50%",
    },
  };

  return (
    <>
      <style>
        {`
                    @keyframes shimmer {
                        0% { background-position: -200% 0; }
                        100% { background-position: 200% 0; }
                    }
                `}
      </style>
      <div className="shimmer-container" style={{ display: "flex" }}>
        <div style={shimmerStyle.wrapper}>
          <div style={shimmerStyle.card}>
            <div style={shimmerStyle.shimmerImage}></div>
            <div style={shimmerStyle.content}>
              <div style={shimmerStyle.title}></div>
              <div style={shimmerStyle.text}></div>
              <div
                style={{ ...shimmerStyle.text, ...shimmerStyle.smallText }}
              ></div>
            </div>
          </div>
        </div>
        <div style={shimmerStyle.wrapper}>
          <div style={shimmerStyle.card}>
            <div style={shimmerStyle.shimmerImage}></div>
            <div style={shimmerStyle.content}>
              <div style={shimmerStyle.title}></div>
              <div style={shimmerStyle.text}></div>
              <div
                style={{ ...shimmerStyle.text, ...shimmerStyle.smallText }}
              ></div>
            </div>
          </div>
        </div>
        <div style={shimmerStyle.wrapper}>
          <div style={shimmerStyle.card}>
            <div style={shimmerStyle.shimmerImage}></div>
            <div style={shimmerStyle.content}>
              <div style={shimmerStyle.title}></div>
              <div style={shimmerStyle.text}></div>
              <div
                style={{ ...shimmerStyle.text, ...shimmerStyle.smallText }}
              ></div>
            </div>
          </div>
        </div>
        <div style={shimmerStyle.wrapper}>
          <div style={shimmerStyle.card}>
            <div style={shimmerStyle.shimmerImage}></div>
            <div style={shimmerStyle.content}>
              <div style={shimmerStyle.title}></div>
              <div style={shimmerStyle.text}></div>
              <div
                style={{ ...shimmerStyle.text, ...shimmerStyle.smallText }}
              ></div>
            </div>
          </div>
        </div>{" "}
        <div style={shimmerStyle.wrapper}>
          <div style={shimmerStyle.card}>
            <div style={shimmerStyle.shimmerImage}></div>
            <div style={shimmerStyle.content}>
              <div style={shimmerStyle.title}></div>
              <div style={shimmerStyle.text}></div>
              <div
                style={{ ...shimmerStyle.text, ...shimmerStyle.smallText }}
              ></div>
            </div>
          </div>
        </div>{" "}
        <div style={shimmerStyle.wrapper}>
          <div style={shimmerStyle.card}>
            <div style={shimmerStyle.shimmerImage}></div>
            <div style={shimmerStyle.content}>
              <div style={shimmerStyle.title}></div>
              <div style={shimmerStyle.text}></div>
              <div
                style={{ ...shimmerStyle.text, ...shimmerStyle.smallText }}
              ></div>
            </div>
          </div>
        </div>{" "}
        <div style={shimmerStyle.wrapper}>
          <div style={shimmerStyle.card}>
            <div style={shimmerStyle.shimmerImage}></div>
            <div style={shimmerStyle.content}>
              <div style={shimmerStyle.title}></div>
              <div style={shimmerStyle.text}></div>
              <div
                style={{ ...shimmerStyle.text, ...shimmerStyle.smallText }}
              ></div>
            </div>
          </div>
        </div>{" "}
        <div style={shimmerStyle.wrapper}>
          <div style={shimmerStyle.card}>
            <div style={shimmerStyle.shimmerImage}></div>
            <div style={shimmerStyle.content}>
              <div style={shimmerStyle.title}></div>
              <div style={shimmerStyle.text}></div>
              <div
                style={{ ...shimmerStyle.text, ...shimmerStyle.smallText }}
              ></div>
            </div>
          </div>
        </div>{" "}
        <div style={shimmerStyle.wrapper}>
          <div style={shimmerStyle.card}>
            <div style={shimmerStyle.shimmerImage}></div>
            <div style={shimmerStyle.content}>
              <div style={shimmerStyle.title}></div>
              <div style={shimmerStyle.text}></div>
              <div
                style={{ ...shimmerStyle.text, ...shimmerStyle.smallText }}
              ></div>
            </div>
          </div>
        </div>{" "}
        <div style={shimmerStyle.wrapper}>
          <div style={shimmerStyle.card}>
            <div style={shimmerStyle.shimmerImage}></div>
            <div style={shimmerStyle.content}>
              <div style={shimmerStyle.title}></div>
              <div style={shimmerStyle.text}></div>
              <div
                style={{ ...shimmerStyle.text, ...shimmerStyle.smallText }}
              ></div>
            </div>
          </div>
        </div>{" "}
        <div style={shimmerStyle.wrapper}>
          <div style={shimmerStyle.card}>
            <div style={shimmerStyle.shimmerImage}></div>
            <div style={shimmerStyle.content}>
              <div style={shimmerStyle.title}></div>
              <div style={shimmerStyle.text}></div>
              <div
                style={{ ...shimmerStyle.text, ...shimmerStyle.smallText }}
              ></div>
            </div>
          </div>
        </div>{" "}
        <div style={shimmerStyle.wrapper}>
          <div style={shimmerStyle.card}>
            <div style={shimmerStyle.shimmerImage}></div>
            <div style={shimmerStyle.content}>
              <div style={shimmerStyle.title}></div>
              <div style={shimmerStyle.text}></div>
              <div
                style={{ ...shimmerStyle.text, ...shimmerStyle.smallText }}
              ></div>
            </div>
          </div>
        </div>{" "}
        <div style={shimmerStyle.wrapper}>
          <div style={shimmerStyle.card}>
            <div style={shimmerStyle.shimmerImage}></div>
            <div style={shimmerStyle.content}>
              <div style={shimmerStyle.title}></div>
              <div style={shimmerStyle.text}></div>
              <div
                style={{ ...shimmerStyle.text, ...shimmerStyle.smallText }}
              ></div>
            </div>
          </div>
        </div>{" "}
        <div style={shimmerStyle.wrapper}>
          <div style={shimmerStyle.card}>
            <div style={shimmerStyle.shimmerImage}></div>
            <div style={shimmerStyle.content}>
              <div style={shimmerStyle.title}></div>
              <div style={shimmerStyle.text}></div>
              <div
                style={{ ...shimmerStyle.text, ...shimmerStyle.smallText }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shimmer;
