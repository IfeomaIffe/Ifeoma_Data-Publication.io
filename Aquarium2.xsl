<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <!--The following is a catch-and-kill template that will prevent all text from being passes to the HTML output-->
    <!--<xsl:template match="text()"></xsl:template>-->
    <xsl:template match="/">
        <html>
           <head>
                <meta charset="UTF-8"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"> </link>
                                <link rel="stylesheet" href="css/_base.css"></link>
                                <link rel="stylesheet" href="css/_fonts.css"></link>
                                <link rel="stylesheet" href="css/style.css"></link>
                                <link rel="icon" type="image/svg" href="images/a.svg" />
                               <title>DIGS Data Publication Winter 2021</title>
            </head>
            <body>
                <div class="container gx-5">
                    <p class="lead">
                    This is the Hyde Park Aquarium fish site information.
                    </p><br/>
                    <xsl:apply-templates/>  
                </div>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="fish">
        <xsl:for-each select=".">
            <h3 class="row"><xsl:value-of select="nickname"/></h3><xsl:text>: </xsl:text>
            <p><xsl:value-of select="taxon"/><xsl:text> </xsl:text><xsl:value-of select="birthday"/></p><br/>
        </xsl:for-each>
    </xsl:template>
    <xsl:template match="text()"/>
</xsl:stylesheet>