const Filters = () => {
  return (
    <div>
      <div className="space-y-6">
        <img
          className="hover:blur-md"
          src="https://picsum.photos/300/200"
          alt="Blur Example"
        />
        <p>
          <strong>Blur:</strong> The <code>blur-md</code> utility blurs the
          image, making it appear out of focus. It is commonly used for hover
          effects, loading placeholders, or to hide sensitive content.
        </p>

        <hr />

        <img
          className="hover:brightness-150"
          src="https://picsum.photos/300/200"
          alt="Brightness Example"
        />
        <p>
          <strong>Brightness:</strong> The <code>brightness-150</code> utility
          increases the image brightness to 150%. It makes the image look
          lighter and is useful for highlighting elements on hover.
        </p>

        <hr />

        <img
          className="hover:contrast-150"
          src="https://picsum.photos/300/200"
          alt="Contrast Example"
        />
        <p>
          <strong>Contrast:</strong> The <code>contrast-150</code> utility
          increases the difference between light and dark areas. Higher contrast
          makes colors and edges appear more distinct.
        </p>

        <hr />

        <img
          className="drop-shadow-2xl"
          src="https://picsum.photos/300/200"
          alt="Drop Shadow Example"
        />
        <p>
          <strong>Drop Shadow:</strong> The <code>drop-shadow-2xl</code> utility
          adds a shadow around the visible shape of the image instead of its
          rectangular box. It creates a floating effect.
        </p>

        <hr />

        <img
          className="hover:grayscale"
          src="https://picsum.photos/300/200"
          alt="Grayscale Example"
        />
        <p>
          <strong>Grayscale:</strong> The <code>grayscale</code> utility removes
          the image colors and converts it to black and white. It is commonly
          used in galleries and hover animations.
        </p>

        <hr />

        <img
          className="shadow"
          src="https://picsum.photos/300/200"
          alt="Shadow Example"
        />
        <p>
          <strong>Shadow:</strong> The <code>shadow</code> utility adds a box
          shadow around the image's rectangular border. It helps separate the
          image from the background.
        </p>

        <hr />

        <img
          className="invert"
          src="https://picsum.photos/300/200"
          alt="Invert Example"
        />
        <p>
          <strong>Invert:</strong> The <code>invert</code> utility reverses all
          the colors in the image. Black becomes white, blue becomes yellow, and
          so on. It is useful for dark mode icons.
        </p>

        <hr />

        <img
          className="saturate-200"
          src="https://picsum.photos/300/200"
          alt="Saturate Example"
        />
        <p>
          <strong>Saturate:</strong> The <code>saturate-200</code> utility
          doubles the color intensity, making the colors appear richer and more
          vibrant.
        </p>

        <hr />

        <img
          className="sepia"
          src="https://picsum.photos/300/200"
          alt="Sepia Example"
        />
        <p>
          <strong>Sepia:</strong> The <code>sepia</code> utility applies a warm
          brownish vintage effect, similar to old photographs.
        </p>

        <hr />

        <img
          className="hue-rotate-90"
          src="https://picsum.photos/300/200"
          alt="Hue Rotate Example"
        />
        <p>
          <strong>Hue Rotate:</strong> The <code>hue-rotate-90</code> utility
          rotates the image colors by 90 degrees on the color wheel. This
          changes the colors while keeping the brightness and contrast the same.
        </p>
      </div>

      //backdrop filers (that modifies the backgrounf of element)

      <div className="bg-gradient-to-r from-blue-500 to-green-500 h-32 w-64">
  Gradient Box
   <img
          className="backdrop-blur-2xl"
          src="https://picsum.photos/300/200"
          alt="Hue Rotate Example"
        />
</div>
 
       </div>
    
  );
};

export default Filters;
